<?php

return [
    /*
      |--------------------------------------------------------------------------
      | Default Filesystem Disk
      |--------------------------------------------------------------------------
      |
      | Here you may specify the default filesystem disk that should be used
      | by the framework. The "local" disk, as well as a variety of cloud
      | based disks are available to your application. Just store away!
      |
      */

    'default' => env('FILESYSTEM_DRIVER', 'local'),

    /*
    |--------------------------------------------------------------------------
    | Default Cloud Filesystem Disk
    |--------------------------------------------------------------------------
    |
    | Many applications store files both locally and in the cloud. For this
    | reason, you may specify a default "cloud" driver here. This driver
    | will be bound as the Cloud disk implementation in the container.
    |
    */

    'cloud' => env('FILESYSTEM_CLOUD', 's3'),

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "sftp", "s3"
    |
    */

    'disks' => [
        'local' => [
            'driver' => 'local',
            'root' => storage_path('app'),
        ],

        'uploads' => [
            'driver' => 'dynamic-uploads',
            'local_root' => env(
                'PRIVATE_UPLOADS_LOCAL_ROOT',
                storage_path('app/uploads'),
            ),
            'remote_root' => env('PRIVATE_UPLOADS_REMOTE_ROOT', 'uploads'),
            'throw' => true,
        ],

        'public' => [
            'driver' => 'dynamic-public',
            'url' => 'storage',
            'visibility' => 'public',
            'local_root' => env(
                'PUBLIC_UPLOADS_LOCAL_ROOT',
                public_path('storage'),
            ),
            'remote_root' => env('PUBLIC_UPLOADS_REMOTE_ROOT', 'storage'),
        ],
    ],

    /*
   |--------------------------------------------------------------------------
   | Symbolic Links
   |--------------------------------------------------------------------------
   |
   | Here you may configure the symbolic links that will be created when the
   | `storage:link` Artisan command is executed. The array keys should be
   | the locations of the links and the values should be their targets.
   |
   */

    'links' => [
        public_path('storage') => storage_path('app/public'),
    ],
];
