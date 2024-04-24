// add_shipping_info sur checkout.html
window.dataLayer.push({'ecommerce':null});
window.dataLayer.push({
    'event': 'add_shipping_info',
    'ecommerce': {
        'shipping_tier':"Mondial Relay",
        'items': products
    }
});
//set_checkout_option
window.dataLayer.push({
    'event': 'set_checkout_option',
    ecommerce:{
        checkout_step:2,
        checkout_option:"CB"
    }
});

//earn_virtual_currency
window.dataLayer.push({
    'event': 'earn_virtual_currency',
    'virtual_currency_name':'Bitcoin',
    'value':100
});

//join_group
window.dataLayer.push({
    'event': 'join_group',
    'group_id':'G_12345'
});

//level_end
window.dataLayer.push({'event':'level_end',
    level_name: 'The journey begins...',
    success: true
});

//level_start
window.dataLayer.push({'event':'level_start',
    level_name: 'The journey begins...'
});

//level_up
window.dataLayer.push({'event':'level_up',
    level: 5,
    character: 'Player 1'
});

//post_score
window.dataLayer.push({'event':'post_score',
    score: 10000,
    level: 5,
    character: 'Player 1'
});
//select_content
window.dataLayer.push({'event':'select_content',
    content_type: 'product',
    item_id: 'I_12345'
});
//sign_up
window.dataLayer.push({'event':'sign_up',
    method: 'Form'
});

//generate_lead
window.dataLayer.push({'event':'generate_lead',
    value: 100
});

//spend_virtual_currency
window.dataLayer.push({
    'event': 'spend_virtual_currency',
    'virtual_currency_name':'Bitcoin',
    'value':100
});

//tutorial_begin
window.dataLayer.push({
    'event': 'tutorial_begin'
});

//tutorial_complete
window.dataLayer.push({
    'event': 'tutorial_complete'
});

//unlock_achievement
window.dataLayer.push({
    'event': 'unlock_achievement',
    achievement_id: 'A_12345'
});