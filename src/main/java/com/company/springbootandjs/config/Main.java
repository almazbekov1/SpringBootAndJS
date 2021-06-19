package com.company.springbootandjs.config;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int a = 10;
        int b = 20;
        int t = a;
        while (t <= b){
            if(t % 2 == 0){
                System.out.println(t+" sd");
            }
            t++;
        }
    }
}
