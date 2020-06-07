<?php declare(strict_types=1);

namespace ShopwareLegalNoticesImmediatelyVisible;

use Shopware\Core\Framework\Plugin;

class ShopwareLegalNoticesImmediatelyVisible extends Plugin
{
    public function uninstall(UninstallContext $context): void
    {
        if ($context->keepUserData()) {
            parent::uninstall($context);

            return;
        }
    }
}