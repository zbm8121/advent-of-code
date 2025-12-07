string filePath = "./2025/day3/input.txt";

string[] ReadInput()
{
    return File.ReadAllLines(filePath);
}

void Part1(string[] input)
{
    int sum = 0;
    foreach (var line in input)
    {
        int max = 0;
        int maxIndex = -1;
        for (int i = 0; i < line.Length - 1; i += 1)
        {
            int current = line[i] - '0';
            if (current > max)
            {
                max = current;
                maxIndex = i;
            }
        }

        int secondMax = 0;
        for (int i = maxIndex + 1; i < line.Length; i += 1)
        {
            int current = line[i] - '0';
            if (current > secondMax)
            {
                secondMax = current;
            }
        }

        sum += (max * 10) + secondMax;
    }

    Console.WriteLine(sum);
}

void main()
{
    string[] input = ReadInput();
    Part1(input);
}

main();
