import useSWR from 'swr';
import axiosInstance from '../../api/axiosInstance';
import { Problem } from '../../type';
import { useCallback, useEffect, useState } from 'react';

export type GetProblemsResponse = Problem[];

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

const useBoard = () => {
  const [similarProblemId, setSimilarProblemId] = useState<{
    id: number | undefined;
    isUpdate: boolean;
  }>({
    id: undefined,
    isUpdate: true
  });
  const [problemList, setProblemList] = useState<Problem[]>([]);

  // API 호출
  const { isLoading, data, error } = useSWR<GetProblemsResponse>(
    `/problems`,
    fetcher,
    {
      revalidateOnFocus: false,
      refreshInterval: 0,
      revalidateOnReconnect: false
    }
  );

  useEffect(() => {
    if (data) {
      setProblemList(data);
    }
  }, [data]);

  // event handler
  const handleSetSimilarProblemId = useCallback(
    (id: number) => {
      // 클릭에 의한 업데이트(API 요청 해야함)
      setSimilarProblemId({ id, isUpdate: true });
    },
    [similarProblemId]
  );
  const handleRemoveSimilarProblemId = useCallback(
    (id: number) => {
      if (id === similarProblemId.id)
        setSimilarProblemId({ id: undefined, isUpdate: true });
    },
    [similarProblemId]
  );

  const handleRemoveProblem = useCallback((id: number) => {
    setProblemList((prev) => prev.filter((problem) => problem.id !== id));
  }, []);

  const handleChangeProblem = useCallback(
    (problem: Problem) => {
      setProblemList((prev) =>
        prev.map((item) => (item.id === similarProblemId.id ? problem : item))
      );
      setSimilarProblemId({ id: problem.id, isUpdate: false });
    },
    [similarProblemId, handleSetSimilarProblemId]
  );

  const handleAddProblem = useCallback(
    (problem: Problem) => {
      setProblemList((prev) => {
        const index = prev.findIndex((item) => item.id === similarProblemId.id);
        if (index === -1) return prev;
        return [...prev.slice(0, index + 1), problem, ...prev.slice(index + 1)];
      });
    },
    [similarProblemId]
  );

  return {
    similarProblemId,
    isLoading,
    problemList,
    data,
    error,
    handleSetSimilarProblemId,
    handleRemoveSimilarProblemId,
    handleRemoveProblem,
    handleChangeProblem,
    handleAddProblem
  };
};

export default useBoard;
