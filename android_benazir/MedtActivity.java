package com.example.demo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Toast;

public class MedtActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_medt);

        Bundle bundle = getIntent().getExtras();
        if(bundle != null){
            if(bundle.getString("some")!=null){
                Toast.makeText(getApplicationContext(),"data:"+bundle.getString("some"),Toast.LENGTH_SHORT).show();

            }
        }
    }
}
