package com.example.otp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.os.StrictMode;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Random;

public class MainActivity extends AppCompatActivity {
    Button btn1;
    Button btn2;
    EditText txt1,txt2,txt3;
    int randomNumber;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        txt1=(EditText) findViewById(R.id.txt1);
        txt2=(EditText) findViewById(R.id.txt2);
        txt3=(EditText) findViewById(R.id.txt3);
        btn1=(Button) findViewById(R.id.btn1);
        btn2=(Button)findViewById(R.id.btn2);
        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);
        btn1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try{
                    // Construct data
                    String apiKey = "apikey=" + "1ubIrU+WFLc-XizpxYanIico1SyzgihNX4zk5dolYd";
                    Random random= new Random();
                    randomNumber=random.nextInt( 999999);
                    String message = "&message=" + "hye"+ txt1.getText().toString()+"Your OTP is"+randomNumber;
                    String sender = "&sender=" + "Benazir";
                    String numbers = "&numbers=" + txt2.getText().toString();

                    // Send data
                    HttpURLConnection conn = (HttpURLConnection) new URL("https://sehat.hyderdevelops.ml/users/generateOTP?phone=").openConnection();
                    String data = apiKey + numbers + message + sender;
                    conn.setDoOutput(true);
                    conn.setRequestMethod("POST");
                    conn.setRequestProperty("Content-Length", Integer.toString(data.length()));
                    conn.getOutputStream().write(data.getBytes("UTF-8"));
                    final BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                    final StringBuffer stringBuffer = new StringBuffer();
                    String line;
                    while ((line = rd.readLine()) != null) {
                        stringBuffer.append(line);
                    }
                    rd.close();
                    Toast.makeText(getApplicationContext(),"OTP send Successfully", Toast.LENGTH_LONG).show();



                    // return stringBuffer.toString();
                } catch (Exception e) {
                    //System.out.println("Error SMS "+e);
                    //  return "Error "+e;
                    Toast.makeText(getApplicationContext(),"Error SMS" +e, Toast.LENGTH_LONG).show();
                    Toast.makeText(getApplicationContext(),"Error" +e, Toast.LENGTH_LONG).show();
                }
            }
        });
        btn2.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View view) {
                                        if(randomNumber==Integer.valueOf(txt3.getText().toString())){
                                            Toast.makeText(getApplicationContext(), "You are Logged in",Toast.LENGTH_LONG).show();
                                        }
                                        else{
                                            Toast.makeText(getApplicationContext(), "wrong OTP",Toast.LENGTH_LONG).show();
                                        }
                                    }
                                }
        );
    }
}