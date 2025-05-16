import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { fetchOsuStreams } from '../services/twitchApi';

const TwitchContext = createContext(undefined);

export const TwitchProvider = ({ children }) => {
  const [streams, setStreams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetched, setLastFetched] = useState(0);

  const loadStreams = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      const osuStreams = await fetchOsuStreams();
      setStreams(osuStreams);
      setLastFetched(Date.now());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load streams');
      console.error('Error loading streams:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshStreams = useCallback(async () => {
    if (!isLoading && Date.now() - lastFetched > 30000) {
      await loadStreams();
    }
  }, [isLoading, lastFetched, loadStreams]);

  useEffect(() => {
    loadStreams();
  }, [loadStreams]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      loadStreams();
    }, 120000);

    return () => clearInterval(intervalId);
  }, [loadStreams]);

  return (
    <TwitchContext.Provider value={{
      streams,
      isLoading,
      error,
      refreshStreams,
      streamsCount: streams.length
    }}>
      {children}
    </TwitchContext.Provider>
  );
};

export const useTwitch = () => {
  const context = useContext(TwitchContext);
  if (context === undefined) {
    throw new Error('useTwitch must be used within a TwitchProvider');
  }
  return context;
};
