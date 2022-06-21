import numpy as np
def solution(arr1, arr2):
    answer = [[]]
    aArr = np.array(arr1)
    bArr = np.array(arr2)
    answer = aArr + bArr
    return answer.tolist()

print(solution([[1,2], [2,3]], [[3,4],[5,6]]))