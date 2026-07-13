class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        // for (let i = 0; i < nums.length; i++) {
        //     for (let j = i + 1; j < nums.length; j++) {
        //         if (nums[i] + nums[j] === target) {
        //             return [i, j]
        //         }
        //     } 
        // }

        const map = new Map<number,number>()

        for (let i = 0; i < nums.length; i++) {
            const complement = target - nums[i]

            if(map.has(complement)) {
                return [map.get(complement), i]
            }
            map.set(nums[i], i)
        }
        return []
    }
}
