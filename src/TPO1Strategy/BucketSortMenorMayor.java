package TPO1Strategy;

public class BucketSortMenorMayor implements EstrategiaOrdenamiento{
	public int[] ordenar(int[] a) {
        int[] bucket = new int[100];
        for (int i = 0; i < bucket.length; i++) {
            bucket[i] = 0;
        }

        for (int i = 0; i < a.length; i++) {
            bucket[a[i]]++;
        }

        int pos = 0;
        for (int i = 0; i < bucket.length; i++) {
            if (bucket[i] == 1) {
                a[pos++] = i;
            }
        }
        return a;
    }
}
