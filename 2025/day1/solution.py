def read_input():
    with open('C:/Users/zbmach/Coding/advent-of-code/2025/day1/input.txt', 'r') as f:
        for line in f:
            yield line.strip()

def part1():
    zero_count = 0
    curr_num = 50
    for line in read_input():
        direction = line[0]
        amount = int(line[1:])

        move_val = -amount if direction == 'L' else amount
        curr_num = (curr_num + move_val) % 100
        if curr_num == 0:
            zero_count += 1

    print(f"Final Number: {curr_num}")
    print(f"Number of times landed on 0: {zero_count}")

def part2():
    zero_count = 0
    curr_num = 50
    for line in read_input():
        direction = line[0]
        amount = int(line[1:])

        prev_num = curr_num

        zero_clicks = amount // 100

        actual_moves = amount % 100
        move_val = -actual_moves if direction == 'L' else actual_moves

        curr_num = curr_num + move_val

        if (curr_num <= 0 or curr_num >= 100) and prev_num != 0:
            zero_clicks += 1
        zero_count += zero_clicks

        curr_num %= 100

    print(f"Final Number: {curr_num}")
    print(f"Number of times passed 0: {zero_count}")

def main():
    part1()
    print("-----")
    part2()

if __name__ == "__main__":
    main()
