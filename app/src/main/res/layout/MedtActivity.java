package com.example.demo;

import androidx.appcompat.app.AppCompatActivity;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TimePicker;
import android.widget.Toast;

import java.util.Calendar;

public class MedtActivity extends AppCompatActivity implements View.OnClickListener {
    private int notificationId=1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_medt);
        findViewById(R.id.sBtn).setOnClickListener(this);
        findViewById(R.id.cBtn).setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        EditText text=findViewById(R.id.etext);
        TimePicker Picker=findViewById(R.id.tPicker);

        Intent intent=new Intent(MedtActivity.this,AlarmRecv.class);
        intent.putExtra("notificationId",notificationId);
        intent.putExtra("todo",text.getText().toString());

        PendingIntent alarmIntent= PendingIntent.getBroadcast(MedtActivity.this,0,intent,PendingIntent.FLAG_CANCEL_CURRENT);

        AlarmManager alarm=(AlarmManager)getSystemService(ALARM_SERVICE);

        switch(view.getId()){
            case R.id.sBtn:
                int hour=Picker.getCurrentHour();
                int minute=Picker.getCurrentMinute();


                Calendar startTime= Calendar.getInstance();
                startTime.set(Calendar.HOUR_OF_DAY, hour);
                startTime.set(Calendar.MINUTE,minute);
                startTime.set(Calendar.SECOND,0);
                long alarmStartTime= startTime.getTimeInMillis();

                alarm.set(AlarmManager.RTC_WAKEUP,alarmStartTime,alarmIntent);

                Toast.makeText(this,"Done",Toast.LENGTH_SHORT).show();
                break;
            case R.id.cBtn:
                alarm.cancel(alarmIntent);
                Toast.makeText(this,"Canceled",Toast.LENGTH_SHORT).show();
                break;




        }

    }
}





