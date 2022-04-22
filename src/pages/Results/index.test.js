import { formatJobList, formatQueryParams } from "./";

describe("The formatJobList function", () => {
    it("should add a comma to a word who's not the final of the list", () => {
        const expectedState = "item2,";
        expect(formatJobList("item2", 3, 1)).toEqual(expectedState);
    });
    it("should not add a comma to the last item of the list", () => {
        const expectedState = "item3";
        expect(formatJobList("item3", 3, 2)).toEqual(expectedState);
    });
});

describe("the formatQueryParams function", () => {
    it("Should use the right format for param", () => {
        const expectedState = "a1=answer1";
        expect(formatQueryParams({ 1: "answer1" })).toEqual(expectedState);
    });
    it("should concatenate params with an &", () => {
        const expectedState = "a1=answer1&a2=answer2";
        expect(formatQueryParams({ 1: "answer1", 2: "answer2" })).toEqual(
            expectedState
        );
    });
});
