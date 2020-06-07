<?php declare(strict_types=1);

namespace ShopwareLegalNoticesImmediatelyVisible;

use Shopware\Core\Framework\Plugin;
use Shopware\Core\Framework\Plugin\Context\UninstallContext;

class ShopwareLegalNoticesImmediatelyVisible extends Plugin
{
    public function uninstall(UninstallContext $context): void
    {
        parent::uninstall($context);
    }
}