import { useState, useCallback, useEffect } from 'react'; // HMMM, which hook do we need to import here?

/**
 * A reusable hook for making API calls
 *
 * @param
 * {Object, { method: string,
 * url: string,
 * onSuccess: function,
 * onError: function,}}
 * @returns {Object, {  isLoading: boolean, error: boolean }}
 */
function useApi({ url, method = 'GET', body, onSuccess }) {
	// TODO: add logic to request data, handle errors and return loading state
	// YOU MUST USE `fetch` for this exercise
}

export default useApi;
