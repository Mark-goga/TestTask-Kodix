import {refreshAllToken} from "../redux/auth/operation";

export default async function UseHandleTokenExpiration(
		error,
		dispatch,
		func,
		{setError, setLoading, setData}
) {
	if (error === 'Access token expired') {
		try {
			setLoading(true);
			await dispatch(refreshAllToken());
			const response =  await func();
			setData(response.data);
			setError(null);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError(error);
			setData([]);
		}
	}else {
		setLoading(false);
		setError(error);
		setData([]);
	}
}
