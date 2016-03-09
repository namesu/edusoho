<?php
namespace Topxia\Service\CloudData\Job;

use Topxia\Service\Crontab\Job;
use Topxia\Service\Common\ServiceKernel;

class CloudDataJob implements Job
{
    public function execute($params)
    {
        //$number = $this->getSessionService()->deleteInvalidSession($retentionTime, $limit);
        $count      = $this->getCloudDataService()->searchCloudDataCount(array());
        $cloudDatas = $this->getCloudDataService()->searchCloudDatas(array(), array('id', 'DESC'), 1, 20);

        foreach ($cloudDatas as $key => $cloudData) {
            $this->getCloudDataService()->push($cloudData['name'], $cloudData['body'], $cloudData['timestamp']);
        }
    }

    protected function getCloudDataService()
    {
        return $this->getServiceKernel()->createService('CloudData.CloudDataService');
    }

    protected function getServiceKernel()
    {
        return ServiceKernel::instance();
    }

    protected function getLogService()
    {
        return $this->getServiceKernel()->createService('Log.LogService');
    }
}
