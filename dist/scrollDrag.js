(function($) {
    $.fn.scrollDrag = function(options) {
        if (this.length == 0) return this;
        if (this.length > 1) return this.each(function(i, e) {
            $(e).scrollDrag(options);
        });
        var $elem = this.data("scrollDragOptions", {
            horizontal: options != null ? !!options.horizontal : false,
            vertical: options != null ? !!options.vertical : false
        });
        console.log($elem);
        $elem.on("mousedown", function(e) {
            $elem.trigger("scrolldragstart").data("mousedown", {
                st: this.scrollTop,
                sl: this.scrollLeft,
                x: document.body.scrollLeft + e.clientX,
                y: document.body.scrollTop + e.clientY
            });
            e.preventDefault();
        });
        $elem.add(window).on("mouseup blur", function(e) {
            console.log(e.type);
            e.preventDefault();
            if ($elem.data("mousedown") != null) {
                $elem.data("mousedown", null).trigger("scrolldragend");
            }
        });
        $(window).on("mousemove", function(e, o) {
            var data = $elem.data("mousedown");
            if (data == null) return;
            e.preventDefault();
            var opts = $elem.data("scrollDragOptions");
            if (opts.horizontal === true) {
                var x = o != null && o.x != null ? o.x : document.body.scrollLeft + e.clientX;
                var movement = data.x - x;
                console.log(movement);
                $elem.prop("scrollLeft", data.sl + movement);
            }
            if (opts.vertical === true) {
                var y = o != null && o.y != null ? o.y : document.body.scrollTop + e.clientY;
                var movement = data.y - y;
                console.log(movement);
                $elem.prop("scrollTop", data.st + movement);
            }
        });
        return this;
    };
})(jQuery);