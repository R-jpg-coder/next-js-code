function get_js_vars() {
    return array(
     'SRP_Loading' => esc_js(__('Loading...', $this-
    >localizationName)),
     'SRP_Refresh' => esc_js(__('Refresh...', $this-
    >localizationName)),
     'SRP_AjaxUrl' => admin_url('admin-ajax.php')
    );
    } //end get_js_vars