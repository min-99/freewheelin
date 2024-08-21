import useSWR from 'swr';
import axiosInstance from '../../api/axiosInstance';
import { Problem } from '../../type';
import { useCallback, useEffect, useState } from 'react';
import { SimilarWorksheetListProps } from './SimilarWorksheetList';

export type GetSimilarProblemsResponse = Problem[];

const useSimilarWorksheetList = ({
  similarProblemId,
  excludedProblemIds,
  isApiUpdate,
  handleChangeProblem,
  handleAddProblem
}: SimilarWorksheetListProps) => {
  const [apiSimilarProblemId, setApiSimilarProblemId] = useState<
    number | undefined
  >();
  const [similarProblemList, setSimilarProblemList] = useState<Problem[]>([]);

  // API 호출
  const { data } = useSWR<GetSimilarProblemsResponse>(
    apiSimilarProblemId ? `/problems/${apiSimilarProblemId}/similarity` : null,
    (url: string) =>
      axiosInstance
        .get(`${url}?excludedProblemIds=${excludedProblemIds?.join(',')}`)
        .then((res) => res.data),
    {
      revalidateOnFocus: false,
      refreshInterval: 0,
      revalidateOnReconnect: false
    }
  );

  useEffect(() => {
    if (isApiUpdate && similarProblemId)
      setApiSimilarProblemId(similarProblemId);
  }, [isApiUpdate, similarProblemId]);

  useEffect(() => {
    if (data) setSimilarProblemList(data);
  }, [data]);

  const handleChangeProblemButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = e.currentTarget.dataset;

      if (id) {
        const problem = similarProblemList?.find(
          (item) => item.id === Number(id)
        );
        if (problem) handleChangeProblem(problem);

        setSimilarProblemList((prev) =>
          prev.filter((item) => item.id !== Number(id))
        );
      }
    },
    [similarProblemList, handleChangeProblem]
  );

  const handleAddProblemButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const { id } = e.currentTarget.dataset;
      if (id) {
        const problem = similarProblemList?.find(
          (item) => item.id === Number(id)
        );
        if (problem) handleAddProblem(problem);

        setSimilarProblemList((prev) =>
          prev.filter((item) => item.id !== Number(id))
        );
      }
    },
    [similarProblemList, handleAddProblem]
  );

  return {
    similarProblemList,
    handleChangeProblemButton,
    handleAddProblemButton
  };
};

export default useSimilarWorksheetList;
