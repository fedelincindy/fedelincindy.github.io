package com.example.toast;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;


import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.toast.R;

public class MainActivity extends AppCompatActivity {
    private EditText edit1;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


        Button button = (Button) findViewById(R.id.button);
        edit1 = findViewById(R.id.edit1);


        button.setOnClickListener(new Button.OnClickListener(){

                                      public void onClick(View v){

                                          Toast.makeText(getApplicationContext(),edit1.getText(),Toast.LENGTH_SHORT).show();
                                      }
                                  }
        );

    }
}