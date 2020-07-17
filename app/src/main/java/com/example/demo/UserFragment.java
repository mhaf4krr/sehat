package com.example.demo;

import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.cardview.widget.CardView;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;




public class UserFragment extends Fragment {
Button click;
public static TextView data;
    private Object view;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_user, container, false);
        click=(Button) view.findViewById(R.id.button1);
        click.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
              Intent in = new Intent(getActivity(),DetailsActivity.class);
              in.putExtra("some","data");
              startActivity(in);
}
});
return view;
}
}