<?php

namespace AwemaPL\TableBuilder;

use AwemaPL\BaseJS\AwemaProvider;

class TableBuilderServiceProvider extends AwemaProvider
{
    public function getPackageName(): string
    {
        return 'table-builder';
    }

    public function getPath(): string
    {
        return __DIR__;
    }
}
