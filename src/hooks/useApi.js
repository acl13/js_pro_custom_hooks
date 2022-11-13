import { useState, useCallback, useEffect } from "react";

/**
 * A reusable hook for making API calls
 *
 * @param {Object, {
 * url: string,
 * onSuccess: function,
 * onError: function,}}
 * @returns {Object, {  isLoading: boolean, error: boolean }}
 */
function useAPi({ url, method = "GET", body, onSuccess }) {
  // TODO: aadd logic to request data, handle errors and return loading state
  // YOU MUST USE `fetch` for this exercise
}

export default useAPi;
