module PusherTrigger
  # Method to trigger an event on a pusher channel and pass arbitrary data
  #
  # This wrapper checks for `the EM.reactor_running?` to attempt to
  # take advantage of eventmachine's ability to allow an app to make API
  # calls to pusher outside the request-response cycle
  #
  # @param channel {string} the name of the channel to send an event to
  # @param event   {string} the name of the event you want to trigger
  # @param data    {object} the data to attach to the triggered event
  #
  def trigger(channel, event, data)
    if EM.reactor_running?
      Pusher[channel].trigger_async(event, data)
    else
      Pusher[channel].trigger(event, data)
    end
  end
end
