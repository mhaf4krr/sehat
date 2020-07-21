package com.example.benazirapi;

import androidx.appcompat.app.AppCompatActivity;

import android.icu.text.StringPrepParseException;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;


public class MainActivity extends AppCompatActivity {

    public void makeRequest(View view){


        EditText testText = (EditText) findViewById(R.id.phoneID);
        String phoneNumber = testText.getText().toString();
        RequestQueue queue = Volley.newRequestQueue(MainActivity.this);
        String url = "https://sehat.hyderdevelops.ml/users/generateOTP?phone=";
        url = url.concat(phoneNumber);
        Log.i("Url",url);

        StringRequest stringRequest=new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {
            @Override
            public void onResponse(String response) {

                try {
                    Toast.makeText(getApplicationContext(),response.toString(),Toast.LENGTH_LONG).show();
                }
                catch (Exception e){
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {

            }
        }){




        };

        queue.add(stringRequest);
    }


    public void confrimOtp(View view){

        EditText testText = (EditText) findViewById(R.id.phoneID);
        String phoneNumber = testText.getText().toString();

        EditText otp = (EditText) findViewById(R.id.otp_rec);
        String otpValue = otp.getText().toString();

        RequestQueue queue = Volley.newRequestQueue(MainActivity.this);
        String url = "https://sehat.hyderdevelops.ml/users/verifyOTP?phone=";
        url = url.concat(phoneNumber);
        url = url.concat("&otp=");
        url = url.concat(otpValue);

        Log.i("Url",url);



        StringRequest stringRequest=new StringRequest(Request.Method.POST, url, new Response.Listener<String>() {


            @Override
            public void onResponse(String response) {

                try{
                    Toast.makeText(getApplicationContext(),"OTP MATCHED".toString(),Toast.LENGTH_LONG).show();

                }
                catch (Exception e){
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                if(error.networkResponse.statusCode == 401){
                    Toast.makeText(getApplicationContext(),"Login Denied".toString(),Toast.LENGTH_LONG).show();
                }
            }
        }){




        };

        queue.add(stringRequest);
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}


