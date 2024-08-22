import useSWR from 'swr';
import axiosInstance from '../../api/axiosInstance';
import { Problem } from '../../type';
import { useCallback, useEffect, useState } from 'react';

export type GetProblemsResponse = Problem[];

const useBoard = () => {
  // 유사문제로 선택된 문제
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
    (url: string) => axiosInstance.get(url).then((res) => res.data),
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

  // 유사문제(state)를 업데이트하는 함수
  const handleSetSimilarProblemId = useCallback(
    (id: number) => {
      setSimilarProblemId({ id, isUpdate: true });
    },
    []
  );
  // 유사문제(state)를 제거하는 함수
  const handleRemoveSimilarProblemId = useCallback(
    (id: number) => {
      if (id === similarProblemId.id)
        setSimilarProblemId({ id: undefined, isUpdate: true });
    },
    [similarProblemId]
  );

  // 문제를 제거하는 함수
  const handleRemoveProblem = useCallback((id: number) => {
    setProblemList((prev) => prev.filter((problem) => problem.id !== id));
  }, []);

  // 문제를 교체하는 함수
  const handleChangeProblem = useCallback(
    (problem: Problem) => {
      setProblemList((prev) =>
        prev.map((item) => (item.id === similarProblemId.id ? problem : item))
      );
      setSimilarProblemId({ id: problem.id, isUpdate: false });
    },
    [similarProblemId, handleSetSimilarProblemId]
  );

  // 문제를 추가하는 함수
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
