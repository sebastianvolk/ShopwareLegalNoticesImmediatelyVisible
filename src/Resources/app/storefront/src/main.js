window.shopwareLegalNoticesImmediatelyVisible = (function () {
    'use strict';
    const _openCollapsedFooter = (footerLinkLabel) => {
        if (footerLinkLabel) {
            const footerColumns = Array.from(
                document.getElementsByClassName('footer-column')
            );
            footerColumns.forEach((footerColumn) => {
                if (_footerColumnContainsLabel(footerColumn, footerLinkLabel)) {
                    _toggleCollapsedFooter(footerColumn);
                }
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
    const _toggleCollapsedFooter = (footerColumn) => {
        footerColumn
            .getElementsByClassName('js-collapse-footer-column-trigger')[0]
            .click();
    };
    return {
        openCollapsedFooter: _openCollapsedFooter,
    };
})();
