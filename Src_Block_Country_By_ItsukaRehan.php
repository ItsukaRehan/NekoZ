<?php 
//SRC LOGIC BY ITSUKA REHAN
//FOR ANAK ANJINK KANG INTIP 
function GetAnakAnjing() { 
      
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) { 
        return $_SERVER['HTTP_CLIENT_IP']; 
    } 
    else if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) { 
        return $_SERVER['HTTP_X_FORWARDED_FOR']; 
    } 
    else { 
        return $_SERVER['REMOTE_ADDR']; 
    } 
} 
  
$visanjink_ip = GetAnakAnjing(); 
$ip = $visanjink_ip; 
$ipdat = @json_decode(file_get_contents( 
    "http://www.geoplugin.net/json.gp?ip=" . $ip)); 
   
if($ipdat->geoplugin_countryName == "Indonesia"){
	echo "BOLEH AKSES";
}else{
	echo "YEE NGAPAIN LU ANJINK";
}
?> 