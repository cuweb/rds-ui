import useSWR from 'swr';
import fetcher from '../functions/fetcher';

const useFilter = (id) => {
  const url = `${site_info.siteAddress}/wp-json/wp/v2/taxonomies/${id}?per_page=100&order=asc`;
  const { data, error } = useSWR(url, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useFilter;