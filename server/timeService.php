<?php
class TimeService
{
	static function month3_lower($monthNum){
		$m='-';
		switch (intval($monthNum)){
		  case 1:  $m='янв';break;
		  case 2:  $m='фев';break;
		  case 3:  $m='мар';break;
		  case 4:  $m='апр';break;
		  case 5:  $m='мая';break;
		  case 6:  $m='июн';break;
		  case 7:  $m='июл';break;
		  case 8:  $m='авг';break;
		  case 9:  $m='сен';break;
		  case 10: $m='окт';break;
		  case 11: $m='ноя';break;
		  case 12: $m='дек';break;
		}
		return $m;
	}

	public static function getCurDate(){
		return date('Y-m-d H:i:s', time() - (int)date('Z'));
	}

	public static function dateFull($dateStr, $spitter=' в ', $tz=0){
		if (empty($dateStr) or '0000-00-00 00:00:00'==$dateStr)
		{return '...';}

		$zone   = $tz*3600;
		$ts     = strtotime($dateStr) + $zone;
		$nowTs  = time() - (int)date('Z') + $zone;

		$res = date('j',$ts).' '.TimeService::month3_lower(date('m',$ts));
		if ($y=date('Y',$ts) and $y!=date('Y',$nowTs)){$res.=' '.$y;}
		return $res.$spitter.date('H:i',$ts);
	}
}