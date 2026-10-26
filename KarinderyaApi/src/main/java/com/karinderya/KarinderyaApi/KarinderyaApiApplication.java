package com.karinderya.KarinderyaApi;

import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KarinderyaApiApplication {

	public static void main(String[] args) {
		Sample runthis = new Sample();
		// SpringApplication.run(KarinderyaApiApplication.class, args);
		runthis.run();
	}

}

interface useFunction {
	String A = "1";
}

abstract class SampleProps implements useFunction {
	public String Name;
	public int c;
	public int b;

}

class Sample extends SampleProps {
	String Name = "Kelvin";

	public void run() {
		System.out.println(A);
	};
}
