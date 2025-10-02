import React from "react";

import { describe, it, expect, vi } from "vitest"; // vitest imports
import { initializeTimes, updateTimes } from "./Main";
import { fetchAPI } from "../../api";

// Mock fetchAPI
vi.mock("../../api", () => ({
  fetchAPI: vi.fn(),
}));

describe("Main API functions", () => {
  it("initializeTimes returns correct initial times", () => {
    const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    fetchAPI.mockReturnValue(mockTimes);
    expect(initializeTimes()).toEqual(mockTimes);
  });

  it("updateTimes returns times based on action date", () => {
    const mockTimes = ["20:00", "21:00"];
    fetchAPI.mockReturnValue(mockTimes);
    const current = ["17:00", "18:00"];
    const action = { type: "update_times", date: "2025-10-02" };
    expect(updateTimes(current, action)).toEqual(mockTimes);
  });
});
