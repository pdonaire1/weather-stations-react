import { WeatherStore, IWeather } from "../store/weather"

describe("WeatherStore", () => {
  it("should validate initial data", () => {
    const weatherStore = new WeatherStore
    expect(weatherStore.error).toBe(false);
    expect(weatherStore.loading).toBe(false);
    expect(weatherStore.journalPage).toBe(1);
    expect(weatherStore.journalPages).toBe(1);
    expect(weatherStore.errorJournal).toBe(false);
    expect(weatherStore.loadingJournal).toBe(false);
  });
  it("should change page and receive the new page params value", () => {
    const weatherStore = new WeatherStore;
    weatherStore.changePage(1);
    expect(weatherStore.journalPage).toBe(1);
  });
});