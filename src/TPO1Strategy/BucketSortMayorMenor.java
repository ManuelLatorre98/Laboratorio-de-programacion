package TPO1Strategy;

public class BucketSortMayorMenor implements EstrategiaOrdenamiento{
	public int[] ordenar(int[] a) {
        int[] bucket = new int[100];
        for (int i = 0; i < bucket.length; i++) {
            bucket[i] = 0;
        }

        for (int i = 0; i < a.length; i++) {
            bucket[a[i]]++;
        }

        int outPos = a.length - 1;
        for (int i = 0; i < bucket.length; i++) {
            if (bucket[i] == 1) {
                a[outPos--] = i;
            }
        }
        return a;
    }
}
