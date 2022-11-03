using System.Globalization;

int[] arr = { 5, 2, 5, 3, 4, 8, 2, 3, 4 };

//Tekrarlananlar ucun bir int

int rpl = 0;

//for dongusu yaradiriq

for (int i = 0; i < arr.Length; i++)
{
	for (int v = i + 1;v<arr.Length; v++)
	{
		if(arr[i] == arr[v])
		{
			
			
            Console.WriteLine(arr[i] + "=" + arr[v]);
            rpl++;


        }
		
	}
}