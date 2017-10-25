#!/bin/bash

rm -rf www
mkdir www
cd $_
git clone https://github.com/aleksandr-tkachuk/autoShopAPI.git .

sed -i .htaccess.bk '/RewriteBase/d' ./.htaccess 
cd ..
sed -i config.bk -f configfix.sed ./www/config/config.php

