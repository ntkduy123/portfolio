package com.portfolio.listener;

public class Intent {

    private String event;

    private Object context;

    public Intent(String event, Object context) {
        this.event = event;
        this.context = context;
    }

    public String getEvent() {
        return event;
    }

    public void setEvent(String event) {
        this.event = event;
    }

    public Object getContext() {
        return context;
    }

    public void setContext(Object context) {
        this.context = context;
    }
}
