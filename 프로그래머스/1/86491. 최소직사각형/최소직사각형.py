def solution(sizes):
    answer = 0
    data = []
    for size in sizes:
        for i in size:
            data.append(i)

    data.sort(reverse=True)
    max = data[0]
    min = data[len(data) - 1]

    for size in sizes:
        if min < size[0] and min < size[1]:
            if size[0] < size[1]:
                min = size[0]
            else:
                min = size[1]


    answer = min * max
    return answer