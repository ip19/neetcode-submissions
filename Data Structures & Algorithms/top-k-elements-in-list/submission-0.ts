class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {


        //create a map where a key is the element and value is the number of times we have that element at the array
        // go through the array and using the map set the element and quantity
        // take k most frequent elements from the map (may I sort the map DESC and take k top keys?)
        // return the array of most frequsnt elements

        const map = new Map<number, number> ()

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        const sorted = [...map.entries()].sort((a, b) => b[1] - a[1])
        return sorted.slice(0,k).map(item => item[0])
    } 
}
