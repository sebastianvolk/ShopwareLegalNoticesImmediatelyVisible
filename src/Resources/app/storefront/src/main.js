window.shopwareLegalNoticesImmediatelyVisible = (function () {
    'use strict';
    const _openCollapsedFooter = (footerLinkLabel) => {
        if (footerLinkLabel) {
            const footerColumns = document.getElementsByClassName('footer-column');
            footerColumns.forEach((footerColumn) => {
                console.log(_footerColumnContainsLabel(footerColumn, footerLinkLabel));
            });
        }
    };
    const _footerColumnContainsLabel = (footerColumn, footerLinkLabel) => {
        const footerLinkItems = Array.from(
            footerColumn.getElementsByClassName('footer-link-item')
        ).map((linkItem) =>
            linkItem.getElementsByTagName('a')[0].getAttribute('title')
        );
        return footerLinkItems.includes(footerLinkLabel);
    };
    return {
        openCollapsedFooter: _openCollapsedFooter,
    };
})();
