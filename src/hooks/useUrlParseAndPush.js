import { useCallback, useMemo } from 'react'
import qs from 'query-string'
import { useLocation, useHistory } from 'react-router-dom'

const useUrlParseAndPush = () => {
  const { pathname, search } = useLocation()
  const { push } = useHistory()

  const handlePush = useCallback((pushValues, path = pathname) => {
    push({
      pathname: path,
      search: qs.stringify(pushValues),
    })
  }, [pathname, push])

  const urlParse = useMemo(() => qs.parse(search), [search])

  return [
    urlParse,
    handlePush,
  ]
}

export default useUrlParseAndPush
