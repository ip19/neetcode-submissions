class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        const sToCompare = s.split('').sort().join('');
        const tToCompare = t.split('').sort().join('');

        if (sToCompare === tToCompare) {
            return true
        }
        return false
    }
}
