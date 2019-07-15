@extends('layouts.app')

@section('content')
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <title>React App</title>
</head>
    <body>
      <div><a href="{{ url('/register') }}"><img src="{{ URL::asset('images/index.jpg') }}" style="height: 500px; width: auto; margin-left: 250px; margin-top: 100px;" alt=""></a></div>
    </body>
</html>
@endsection