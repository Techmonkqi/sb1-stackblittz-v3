"use client"

import { useEffect, useState } from "react"
import { GoogleMap, LoadScript, Marker, useLoadScript } from "@react-google-maps/api"
import { Card } from "@/components/ui/card"

interface MapViewProps {
  address: string
  name: string
  className?: string
}

interface Coordinates {
  lat: number
  lng: number
}

const mapStyles = {
  height: "400px",
  width: "100%",
}

const defaultCenter = {
  lat: 6.8013, // Georgetown, Guyana
  lng: -58.1553,
}

const libraries: ("places" | "geometry" | "drawing" | "localContext" | "visualization")[] = ["places"]

export function MapView({ address, name, className }: MapViewProps) {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDQVEFIVu4Esg7xOd16xGyFXx6DFpvvzrI",
    libraries,
  })

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder()
      geocoder.geocode(
        { address: `${address}, Guyana` },
        (results, status) => {
          if (status === "OK" && results?.[0]?.geometry?.location) {
            const location = results[0].geometry.location
            setCoordinates({
              lat: location.lat(),
              lng: location.lng(),
            })
          }
        }
      )
    }
  }, [isLoaded, address])

  if (loadError) {
    return <div>Error loading maps</div>
  }

  if (!isLoaded) {
    return <div>Loading maps...</div>
  }

  return (
    <Card className={className}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={coordinates || defaultCenter}
        options={{
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: true,
        }}
      >
        {coordinates && (
          <Marker
            position={coordinates}
            title={name}
            animation={window.google.maps.Animation.DROP}
          />
        )}
      </GoogleMap>
    </Card>
  )
}