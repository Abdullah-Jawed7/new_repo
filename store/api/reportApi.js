import axios from "axios";

// reportAPI.js
export const reportAPI = {
  /**
   * uploadReport(formData)
   * - formData is a FormData instance (file + optional metadata)
   * Replace this with an actual fetch/axios call to your backend.
   */
  uploadReport: async (formData) => {
    try {
        

      for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value)
        }
        console.log(formData)
          const response = await axios.post(`https://smit-hackathon-backend-phi.vercel.app/api/report/add`, formData);
    // Simulate network latency and return dummy response

    // Here you can inspect formData (only for debugging)
    // Example: const file = formData.get("file")
    return {
      ok: true,
      data: {
        id: Math.random().toString(36).slice(2, 9),
        message: "Mock upload successful",
        // optionally echo back some metadata parsed from FormData
      },
    }
        } catch (error) {
        console.log(error)
    }
  },

  // Add more handlers (fetchReports, getReport, deleteReport) as needed
}
