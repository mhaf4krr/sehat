package com.example.benazirapi;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

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


        RequestQueue requestQueue=Volley.newRequestQueue(MainActivity.this);
        EditText testText = (EditText) findViewById(R.id.test_id);
        String testId = testText.getText().toString();
        RequestQueue queue = Volley.newRequestQueue(MainActivity.this);
        String url = "https://sehat.hyderdevelops.ml/tests/getOne?id=";
        url = url.concat(testId);
        Log.i("Url",url);

        JsonObjectRequest request = new JsonObjectRequest(Request.Method.POST, url, null, new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                TextView patientUID , labName,location, testResult;
                patientUID = findViewById(R.id.patient_uid);
                labName = findViewById(R.id.lab_name);
                location = findViewById(R.id.location);
                testResult = findViewById(R.id.test_result);

                try {

                    patientUID.setText(response.getString("PATIENT_UID"));
                    labName.setText(response.getString("LAB_NAME"));
                    location.setText(response.getString("LAB_LOCATION"));
                    testResult.setText(response.getString("TEST_RESULT"));
                }

                catch (JSONException error){
                    error.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                error.printStackTrace();
            }
        });

        requestQueue.add(request);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}


