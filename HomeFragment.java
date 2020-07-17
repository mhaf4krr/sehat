package com.example.demo;

import android.content.Intent;
import android.media.Image;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.cardview.widget.CardView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.GridLayout;
import android.widget.ImageView;
import android.widget.TextView;

public class HomeFragment extends Fragment {
    CardView booking;
    CardView reports;
    CardView visuals;
    CardView folders;


    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view= inflater.inflate(R.layout.fragment_home, container, false);
        CardView booking=(CardView) view.findViewById(R.id.booking);
        booking.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),BookingActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
        CardView reports=(CardView) view.findViewById(R.id.reports);
        reports.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),ReportsActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
        CardView visuals=(CardView) view.findViewById(R.id.visuals);
        visuals.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),VisualsActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
        CardView folders=(CardView) view.findViewById(R.id.folders);
        folders.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),FoldersActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
        CardView med1=(CardView) view.findViewById(R.id.med1);
        med1.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),MedoActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
        CardView med2=(CardView) view.findViewById(R.id.med2);
        med2.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),MedtActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
        CardView add=(CardView) view.findViewById(R.id.add);
        add.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),VisualsActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
        CardView ups=(CardView) view.findViewById(R.id.ups);
        ups.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View view){
                Intent in =new Intent(getActivity(),UpsActivity.class);
                in.putExtra("some","some data");
                startActivity(in);
            }
        });
    return view;
    }
}