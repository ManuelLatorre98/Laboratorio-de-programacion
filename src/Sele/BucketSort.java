/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Ordenamiento;

/**
 *
 * @author Selena
 */
public class BucketSort {

    public static int[] sortMayorMenor(int[] a) {
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

    public static int[] sortMenorMayor(int[] a) {
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
