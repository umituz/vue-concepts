<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel Vue App</title>
        <!-- Our Css Mix File -->
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>
    <body>

    <div id="app"></div>

    <!-- Our JS Mix File -->
    <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
