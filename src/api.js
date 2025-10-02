// Wrapper to safely use the Coursera API script if present
export const fetchAPI = (date) => {
  if (typeof window !== "undefined" && window.fetchAPI) {
    return window.fetchAPI(date);
  }
  // fallback (for tests, we can override this)
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const submitAPI = (formData) => {
  if (typeof window !== "undefined" && window.submitAPI) {
    return window.submitAPI(formData);
  }
  return true; // fallback for tests
};
