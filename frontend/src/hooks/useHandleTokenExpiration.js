import { refreshAllToken } from "../redux/auth/operation";

export default async function UseHandleTokenExpiration(
		setError,
		dispatch,
		func,
		arg,
		setLoading
) {
	try {
		setLoading && setLoading(true);
		await dispatch(refreshAllToken());
		const response =  await func(arg);
		setError(null);
		setLoading && setLoading(false);
		return response
	} catch (error) {
		setLoading && setLoading(false);
		setError(error);
		throw error;
	}
}
